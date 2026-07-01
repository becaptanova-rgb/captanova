export function getWelcomeEmailHTML(name: string, profile: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Captanova Growth Profile™</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Georgia', serif; background: #0a0a0a; color: #ffffff; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .logo { text-align: center; margin-bottom: 40px; }
    .logo h1 { font-size: 28px; letter-spacing: 4px; color: #D4AF37; font-weight: 300; }
    .logo p { font-size: 11px; letter-spacing: 3px; color: #888; margin-top: 4px; text-transform: uppercase; }
    .hero { background: linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%); border: 1px solid #D4AF37; border-radius: 16px; padding: 48px 40px; text-align: center; margin-bottom: 32px; }
    .hero h2 { font-size: 14px; letter-spacing: 4px; color: #D4AF37; text-transform: uppercase; margin-bottom: 16px; }
    .hero h3 { font-size: 36px; color: #ffffff; line-height: 1.2; margin-bottom: 24px; font-style: italic; }
    .profile-badge { background: #D4AF37; color: #0a0a0a; display: inline-block; padding: 8px 24px; border-radius: 50px; font-size: 14px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px; }
    .greeting { font-size: 18px; color: #cccccc; line-height: 1.6; }
    .section { margin-bottom: 32px; }
    .section h4 { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #D4AF37; margin-bottom: 16px; }
    .section p { font-size: 16px; color: #cccccc; line-height: 1.8; }
    .challenge-box { background: #111; border-left: 3px solid #D4AF37; padding: 24px 28px; border-radius: 0 12px 12px 0; margin: 24px 0; }
    .challenge-box p { font-size: 15px; color: #ddd; line-height: 1.7; font-style: italic; }
    .cta-button { display: block; background: linear-gradient(135deg, #D4AF37, #F0D060); color: #0a0a0a; text-align: center; padding: 18px 40px; border-radius: 8px; font-size: 16px; font-weight: 700; letter-spacing: 1px; text-decoration: none; margin: 32px 0; }
    .footer { text-align: center; padding-top: 32px; border-top: 1px solid #222; }
    .footer p { font-size: 13px; color: #555; line-height: 2; }
    .footer a { color: #D4AF37; text-decoration: none; }
    .infinity { font-size: 24px; color: #D4AF37; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <h1>CAPTANOVA</h1>
      <p>Be The Captain Of Your Life ∞</p>
    </div>
    
    <div class="hero">
      <h2>Your Growth Profile Is Ready</h2>
      <div class="profile-badge">${profile}</div>
      <h3>Hello, ${name}.</h3>
      <p class="greeting">Your assessment results reveal something important about where you are — and where you're heading.</p>
    </div>

    <div class="section">
      <h4>Your Natural Gift</h4>
      <p>The pattern you answered with most reveals not just your challenge — but your greatest untapped strength. The very thing holding you back is often the same energy that, when redirected, becomes your superpower.</p>
    </div>

    <div class="challenge-box">
      <p>"Most people don't need more information. They need clarity. They need confidence. They need communication skills. And most importantly, they need a way to turn knowledge into action."</p>
      <p style="margin-top: 12px; color: #D4AF37;">— Renu Sharma, Captanova Academy</p>
    </div>

    <div class="section">
      <h4>Your Next Step</h4>
      <p>The Awareness Journal is where your transformation begins. 21 days. One journal. The most important meeting is with yourself.</p>
    </div>

    <a href="${process.env.NEXT_PUBLIC_SITE_URL}/#programs" class="cta-button">
      Explore Your Personalized Path →
    </a>

    <div class="section">
      <h4>The Captanova Framework</h4>
      <p>Awareness → Clarity → Confidence → Communication → Action → Leadership</p>
      <p style="margin-top: 12px;">Every step builds on the last. You've just taken the first one.</p>
    </div>

    <div class="footer">
      <span class="infinity">∞</span>
      <p style="margin-top: 16px;"><strong style="color: #D4AF37;">CAPTANOVA ACADEMY</strong></p>
      <p>The Academy for Mindset, Communication & Self-Leadership</p>
      <p style="margin-top: 16px;"><a href="${process.env.NEXT_PUBLIC_SITE_URL}">captanovaacademy.com</a></p>
      <p style="margin-top: 24px; font-size: 11px; color: #444;">You received this because you completed the Captanova Clarity Assessment.<br>© 2024 Captanova Academy. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;
}

export function getPurchaseConfirmationHTML(
  name: string,
  programName: string,
  orderId: string
): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Georgia, serif; background: #0a0a0a; color: #fff; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .logo { text-align: center; margin-bottom: 40px; }
    .logo h1 { font-size: 28px; letter-spacing: 4px; color: #D4AF37; font-weight: 300; }
    .card { background: linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%); border: 1px solid #D4AF37; border-radius: 16px; padding: 48px 40px; text-align: center; margin-bottom: 32px; }
    .check { font-size: 48px; margin-bottom: 16px; }
    .card h2 { font-size: 32px; color: #D4AF37; margin-bottom: 16px; }
    .card p { font-size: 16px; color: #ccc; line-height: 1.7; }
    .order-box { background: #111; border: 1px solid #333; border-radius: 12px; padding: 24px; margin: 24px 0; }
    .order-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #222; font-size: 14px; color: #aaa; }
    .order-row:last-child { border-bottom: none; color: #D4AF37; font-weight: bold; }
    .footer { text-align: center; padding-top: 32px; border-top: 1px solid #222; }
    .footer p { font-size: 13px; color: #555; line-height: 2; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo"><h1>CAPTANOVA</h1></div>
    <div class="card">
      <div class="check">✅</div>
      <h2>You're In, ${name}!</h2>
      <p>Your enrollment in <strong style="color:#D4AF37">${programName}</strong> is confirmed. Your transformation begins now.</p>
    </div>
    <div class="order-box">
      <div class="order-row"><span>Order ID</span><span>${orderId}</span></div>
      <div class="order-row"><span>Program</span><span>${programName}</span></div>
      <div class="order-row"><span>Status</span><span>Confirmed ✓</span></div>
    </div>
    <p style="text-align:center;color:#888;font-size:14px;line-height:1.8;">Renu will be in touch within 24 hours with your onboarding details.<br>In the meantime, join the Captanova community on WhatsApp.</p>
    <div class="footer">
      <p><strong style="color:#D4AF37">CAPTANOVA ACADEMY</strong></p>
      <p>Be The Captain Of Your Life ∞</p>
    </div>
  </div>
</body>
</html>
  `;
}
