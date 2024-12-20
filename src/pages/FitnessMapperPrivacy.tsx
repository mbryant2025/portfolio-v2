const FitnessMapperPrivacyPolicy = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "white" }}>
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> 12/19/24</p>
      <p>
        Fitness Mapper ("the App") respects your privacy and is committed to protecting your
        personal data. This Privacy Policy outlines how we handle your information when you use
        the App.
      </p>

      <hr />

      <h2>1. Information We Collect</h2>
      <p>
        The App does not collect any personal or non-personal information. The App simply reads
        data from Apple Health, including:
      </p>
      <ul>
        <li><strong>Workout Data:</strong> Information about your workouts such as routes, durations, distances, and activity types.</li>
        <li><strong>Heart Rate Data:</strong> Heart rate readings associated with your workouts.</li>
      </ul>
      <p>
        In addition, the App stores your preference for measurement units (metric or imperial) using
        your device’s local storage (UserDefaults). This information is stored solely on your device and is not transmitted or shared with any third parties.
      </p>

      <hr />

      <h2>2. How We Use Your Information</h2>
      <p>We use the data accessed from Apple Health and your stored preferences solely to:</p>
      <ul>
        <li>Display and plot your workout data on maps within the App.</li>
        <li>Allow you to view and interact with your fitness data directly on your device.</li>
        <li>Tailor the display of information based on your preferred measurement units (metric or imperial).</li>
      </ul>
      <p>The App does not process or transmit this data beyond your device.</p>

      <hr />

      <h2>3. Data Storage and Security</h2>
      <h3>3.1 Local Processing</h3>
      <p>
        All fitness and heart rate data is processed locally on your device. Additionally, your
        preference for measurement units is stored locally using UserDefaults. The App does not
        store or retain this data outside of your device.
      </p>
      <h3>3.2 Security Measures</h3>
      <p>
        The App relies on your device's built-in security to protect your data. We do not implement
        additional storage or data transmission mechanisms.
      </p>

      <hr />

      <h2>4. Sharing Your Data</h2>
      <p>The App does not share your fitness or personal data with any third parties. All data remains securely on your device.</p>

      <hr />

      <h2>5. Your Choices</h2>
      <h3>5.1 Managing Permissions</h3>
      <p>
        You can manage your Apple Health permissions at any time through your device settings:
      </p>
      <ul>
        <li>Go to <strong>Settings &gt; Privacy & Security &gt; Health</strong> and select Fitness Mapper to modify permissions.</li>
      </ul>
      <h3>5.2 Deleting Data</h3>
      <p>
        To stop the App from accessing your data, revoke permissions in the Apple Health settings.
        Uninstalling the App will prevent further access. Your stored preferences (metric or
        imperial) will also be deleted upon uninstalling the App.
      </p>

      <hr />

      <h2>6. Third-Party Services</h2>
      <p>The App does not use any third-party analytics, advertising, or data processing services.</p>

      <hr />

      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be effective upon
        posting. We recommend reviewing this policy periodically to stay informed about our
        practices.
      </p>

      <hr />

      <h2>8. Contact Us</h2>
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

export default FitnessMapperPrivacyPolicy;
