import {NextResponse} from 'next/server';
export const runtime='nodejs';
export const dynamic='force-dynamic';
const recent=new Map();
const escapeHtml=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export async function POST(request){try{
 const len=Number(request.headers.get('content-length')||0);if(len>20000)return NextResponse.json({error:'Request too large.'},{status:413});
 const body=await request.json();if(!body||typeof body!=='object')return NextResponse.json({error:'Invalid form data.'},{status:400});
 const {name,email,company='',service='',message='',website=''}=body;
 if(website)return NextResponse.json({ok:true});
 if([name,email,message].some(v=>typeof v!=='string'))return NextResponse.json({error:'Please complete the required fields.'},{status:400});
 const clean={name:name.trim(),email:email.trim(),company:String(company).trim(),service:String(service).trim(),message:message.trim()};
 if(clean.name.length<2||clean.name.length>120||clean.email.length>255||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)||clean.message.length<15||clean.message.length>5000||clean.company.length>200||clean.service.length>160)return NextResponse.json({error:'Please check your name, email and message.'},{status:400});
 // Best-effort local throttle. Use a shared store / CAPTCHA for high-volume production sites.
 const ip=(request.headers.get('x-forwarded-for')||'').split(',')[0].trim()||'unknown';const key=`${ip}:${clean.email.toLowerCase()}`;const now=Date.now();const prev=recent.get(key)||0;if(now-prev<30000)return NextResponse.json({error:'Please wait briefly before sending another inquiry.'},{status:429});
 const apiKey=process.env.RESEND_API_KEY;const sender=process.env.CONTACT_FROM_EMAIL;const recipient=process.env.CONTACT_TO_EMAIL||'devstack912@gmaill.com';
 if(!apiKey||!sender)return NextResponse.json({error:'Email delivery is not configured yet. Please contact us directly.'},{status:503});
 const html=`<div style="font-family:Arial,sans-serif;max-width:650px;color:#132033"><h2>New BAE website inquiry</h2><p><b>Name:</b> ${escapeHtml(clean.name)}</p><p><b>Email:</b> ${escapeHtml(clean.email)}</p><p><b>Company:</b> ${escapeHtml(clean.company)}</p><p><b>Area:</b> ${escapeHtml(clean.service)}</p><p><b>Message:</b></p><p style="white-space:pre-wrap">${escapeHtml(clean.message)}</p></div>`;
 const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{'Authorization':`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify({from:sender,to:[recipient],reply_to:clean.email,subject:`BAE inquiry: ${clean.service||'General'} — ${clean.name}`,html})});
 if(!response.ok){console.error('BAE email delivery failed',response.status);return NextResponse.json({error:'We could not deliver the message right now. Please retry later.'},{status:502})}
 recent.set(key,now);if(recent.size>1500)recent.clear();return NextResponse.json({ok:true});
 }catch(error){console.error('BAE contact endpoint error',error?.message);return NextResponse.json({error:'An unexpected error occurred. Please try again.'},{status:500})}}
