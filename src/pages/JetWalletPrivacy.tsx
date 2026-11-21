const JetWalletPrivacyPolicy = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "white" }}>
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> 11/20/26</p>
      <p>
        JetWallet ("the App") helps you keep track of airline flight credits and their expiry
        dates. It is built so that your information stays with you.
      </p>

      <hr />

      <h2>1. Information We Collect</h2>
      <p>
        We collect nothing. We do not run servers for the App, and we do not receive, store, or
        have access to your data. The App has no accounts, analytics, advertising, or tracking,
        and it does not use third-party SDKs that collect data.
      </p>

      <hr />

      <h2>2. Information Stored on Your Device</h2>
      <p>
        The credits you add are saved on your device. This includes airline names, amounts,
        currencies, expiry dates, booking notes, and the reminder settings you choose. Only you can
        see this data. The App also stores your preferences (such as appearance and reminder
        timing) on your device.
      </p>

      <hr />

      <h2>3. iCloud Sync</h2>
      <p>
        If you are signed in to iCloud, the App uses Apple's iCloud (CloudKit) to sync your credits
        between your own devices. The data is stored in your private iCloud database, which is
        governed by your Apple Account and{" "}
        <a href="https://www.apple.com/legal/privacy/">Apple's Privacy Policy</a>. We cannot access
        it. You can turn sync off by disabling iCloud for JetWallet in your device settings.
      </p>

      <hr />

      <h2>4. Notifications</h2>
      <p>
        If you allow notifications, the App schedules reminders locally on your device before your
        credits expire. These reminders are not sent through any server. You can change this at any
        time in your device's Settings.
      </p>

      <hr />

      <h2>5. Widgets, Siri, and Shortcuts</h2>
      <p>
        Widgets, Siri, and Shortcuts read your credits on your device only, in order to show or
        speak them to you.
      </p>

      <hr />

      <h2>6. Purchases</h2>
      <p>
        The optional Unlimited Credits purchase is handled entirely by Apple through the App Store.
        We do not see your payment details, and we receive no personal information about you from
        the purchase.
      </p>

      <hr />

      <h2>7. Sharing Your Data</h2>
      <p>The App does not share your data with anyone. We do not have it to share.</p>

      <hr />

      <h2>8. Third-Party Services</h2>
      <p>The App does not use any third-party analytics, advertising, or data processing services.</p>

      <hr />

      <h2>9. Children</h2>
      <p>The App does not collect information from anyone, including children.</p>

      <hr />

      <h2>10. Your Choices and Deleting Data</h2>
      <p>
        Because we hold none of your data, there is nothing for us to delete. You can delete your
        credits inside the App, or delete the App to remove its data from your device. To remove
        data synced through iCloud, manage iCloud storage in your device settings.
      </p>

      <hr />

      <h2>11. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be effective upon
        posting, and the effective date above will be updated.
      </p>

      <hr />

      <h2>12. Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy, please contact:</p>
      <ul>
        <li><strong>Email:</strong> mbryant2025@yahoo.com</li>
        <li><strong>Website:</strong> michaelcbryant.com</li>
      </ul>

      <hr />

      <p>
        By using the App, you agree to this Privacy Policy and our handling of your data as
        described above.
      </p>
    </div>
  );
};

export default JetWalletPrivacyPolicy;
