const JetWalletSupportPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "white" }}>
      <h1>Support</h1>
      <p>
        Welcome to the JetWallet support page. We're here to help with any questions or issues you
        may have. Below, you'll find ways to get in touch with us and answers to common questions.
      </p>

      <hr />

      <h2>Contact Us</h2>
      <p>If you need assistance, you can reach us through the following channels:</p>
      <ul>
        <li>
          <strong>Email:</strong> <a href="mailto:mbryant2025@yahoo.com">mbryant2025@yahoo.com</a>
        </li>
      </ul>

      <hr />

      <h2>Frequently Asked Questions</h2>

      <h3>1. Where is my data stored?</h3>
      <p>
        On your device. If you are signed in to iCloud, it also syncs between your own devices
        through your private iCloud account. We never receive or store your data.
      </p>

      <h3>2. My credits aren't syncing between devices.</h3>
      <p>
        Check that you are signed in to the same Apple Account on each device and that iCloud is
        enabled for JetWallet in <strong>Settings &gt; Apple Account &gt; iCloud</strong>. Then open
        the app on both devices. Syncing can take a few minutes.
      </p>

      <h3>3. I'm not getting expiry reminders.</h3>
      <p>
        Go to <strong>Settings &gt; Notifications &gt; JetWallet</strong> and allow notifications.
        Also check that the credit has an expiry date and that reminders are turned on in the app.
      </p>

      <h3>4. How do I restore my Unlimited Credits purchase?</h3>
      <p>
        Open the Unlimited Credits screen in the app and tap <strong>Restore purchase</strong>. Use
        the same Apple Account you bought it with.
      </p>

      <h3>5. How do I request a refund?</h3>
      <p>
        Refunds for App Store purchases are handled by Apple. Visit{" "}
        <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
      </p>

      <h3>6. How do I delete my data?</h3>
      <p>
        Delete your credits inside the app, or delete the app. See the{" "}
        <a href="#/jetwallet-privacy-policy">Privacy Policy</a> for details about iCloud data.
      </p>

      <h3>7. Is JetWallet affiliated with any airline?</h3>
      <p>
        No. Airline names are used only so you can label your own credits.
      </p>

      <hr />

      <h2>Technical Support</h2>
      <p>
        If you encounter any technical issues while using the app, please email us at{" "}
        <a href="mailto:mbryant2025@yahoo.com">mbryant2025@yahoo.com</a> with a detailed
        description of the problem, including your device model and iOS or macOS version.
      </p>

      <hr />

      <h2>Feedback</h2>
      <p>
        We value your feedback! If you have suggestions for improving JetWallet, please send them
        to <a href="mailto:mbryant2025@yahoo.com">mbryant2025@yahoo.com</a>.
      </p>

      <hr />

      <p>
        Thank you for using JetWallet. We strive to provide the best experience possible and
        appreciate your support.
      </p>
    </div>
  );
};

export default JetWalletSupportPage;
