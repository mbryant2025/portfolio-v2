const FitnessMapperSupportPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "white" }}>
      <h1>Support</h1>
      <p>
        Welcome to the Fitness Mapper support page. We're here to help with any questions or issues
        you may have. Below, you'll find ways to get in touch with us and answers to common questions.
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

      <h3>1. How do I grant the app permission to access my fitness data?</h3>
      <p>
        To grant permissions, go to <strong>Settings &gt; Privacy & Security &gt; Health</strong> on your iPhone. Select Fitness Mapper and enable the permissions you wish to grant.
      </p>

      <h3>2. Can I change my measurement preferences?</h3>
      <p>
        Yes, you can switch between metric and imperial units in the app settings. These preferences
        are stored locally on your device and persist between launches of the app.
      </p>

      <h3>3. How do I revoke the app's access to my data?</h3>
      <p>
        To revoke access, go to <strong>Settings &gt; Privacy & Security &gt; Health</strong>,
        select Fitness Mapper, and turn off the permissions.
      </p>

      <h3>4. What happens to my preferences if I uninstall the app?</h3>
      <p>
        All locally stored preferences, including your measurement settings, will be deleted when
        you uninstall the app.
      </p>

      <h3>4. What workouts are plotted?</h3>
      <p>
        All those that are locally on your device that have associated GPS data. The app will automatically check all workouts for such data.
      </p>

      <hr />

      <h2>Technical Support</h2>
      <p>
        If you encounter any technical issues while using the app, please email us at
        <a href="mailto:mbryant2025@yahoo.com">mbryant2025@yahoo.com</a> with a detailed
        description of the problem, including your device model and iOS version.
      </p>

      <hr />

      <h2>Feedback</h2>
      <p>
        We value your feedback! If you have suggestions for improving Fitness Mapper, please send
        them to <a href="mailto:mbryant2025@yahoo.com">mbryant2025@yahoo.com</a>.
      </p>

      <hr />

      <p>
        Thank you for using Fitness Mapper. We strive to provide the best experience possible and
        appreciate your support.
      </p>
    </div>
  );
};

export default FitnessMapperSupportPage;
