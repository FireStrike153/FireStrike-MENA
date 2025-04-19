
import emailjs from 'emailjs-com';

export const sendVerificationEmail = async (email, username) => {
  try {
    const templateParams = {
      to_email: email,
      to_name: username,
      message: `مرحباً بك في Inferno Mena! تم إنشاء حسابك بنجاح.`,
      from_name: "Inferno Mena"
    };

    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_USER_ID'
    );

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
