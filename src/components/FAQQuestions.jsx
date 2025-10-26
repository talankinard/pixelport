const FAQItems = () =>
{
    return (
        <main className="faq">
            <h2>Frequently Asked Questions (FAQ)</h2>

            <div className="faq-item">
                <div className="faq-question">
                    <div className="bubble">Q</div>
                    <p>What is PixelPort and what do you sell?</p>
                </div>
                <div className="faq-answer">
                    <div className="bubble">A</div>
                    <p>PixelPort is an online storefront for games, consoles, and accessories.</p>
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question">
                    <div className="bubble">Q</div>
                    <p>How long do deals last?</p>
                </div>
                <div className="faq-answer">
                    <div className="bubble">A</div>
                    <p>Deal times may vary, but usually around a week.</p>
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question">
                    <div className="bubble">Q</div>
                    <p>How do I contact support?</p>
                </div>
                <div className="faq-answer">
                    <div className="bubble">A</div>
                    <p>Use the Contact page to submit a ticket. Include your order number and platform so we can help faster.</p>
                </div>
            </div>
        </main>
    )
}

export default FAQItems
