import Head from "next/head";

export default function Page(){
    return(
        <>
        <Head>
            <title>Freefire Topup Center</title>
            <meta name="description" content="Top up your Free Fire diamonds quickly and securely. Best prices for Free Fire recharge, instant delivery, and secure payment methods available." />
            <meta name="keywords" content="Free Fire topup, Free Fire diamonds, FF diamonds, Free Fire recharge, gaming topup, Garena Free Fire" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="Free Fire Topup - Quick & Secure Diamond Recharge" />
            <meta property="og:description" content="Get instant Free Fire diamonds at the best prices. Safe and reliable topup service for Garena Free Fire players." />
            <meta property="og:type" content="website" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}/freefire`} />
        </Head>
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Free Fire Diamond Top-Up: Your Ultimate Guide</h1>
            
            <article className="prose">
                <p className="mb-4">
                    Free Fire diamonds are the premium in-game currency that every player needs to enhance their gaming experience. With diamonds, you can unlock exclusive characters, weapons, and cosmetic items that give you an edge in the battlefield.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose Our Top-Up Service?</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li>Instant delivery of diamonds to your account</li>
                    <li>Competitive prices and regular discounts</li>
                    <li>100% secure payment processing</li>
                    <li>24/7 customer support</li>
                    <li>Compatible with all regions and devices</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-4">How to Top Up Free Fire Diamonds</h2>
                <ol className="list-decimal pl-6 mb-4">
                    <li>Enter your Free Fire ID</li>
                    <li>Select your preferred diamond package</li>
                    <li>Choose your payment method</li>
                    <li>Complete the secure payment</li>
                    <li>Receive diamonds instantly in your account</li>
                </ol>

                <p className="mt-6">
                    Don't miss out on the action! Top up your Free Fire diamonds now and take your gaming experience to the next level with our fast, secure, and reliable service.
                </p>
            </article>
        </div>
        </>
    )
}