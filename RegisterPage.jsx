
// Previous imports remain the same...

const RegisterPage = () => {
  // Previous state and functions remain the same...

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "خطأ في النموذج",
        description: "الرجاء التحقق من جميع الحقول",
        variant: "destructive"
      });
      return;
    }

    try {
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      
      // التحقق من وجود البريد الإلكتروني
      if (existingUsers.some(user => user.email === formData.email)) {
        toast({
          title: "خطأ",
          description: "هذا البريد الإلكتروني مستخدم بالفعل",
          variant: "destructive"
        });
        return;
      }

      // التحقق من وجود اسم المستخدم
      if (existingUsers.some(user => user.username === formData.username)) {
        toast({
          title: "خطأ",
          description: "اسم المستخدم مستخدم بالفعل",
          variant: "destructive"
        });
        return;
      }

      const newUser = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        secretQuestion: formData.secretQuestion,
        secretAnswer: formData.secretAnswer,
        createdAt: new Date().toISOString(),
        isEmailVerified: false
      };
      
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      // إرسال رسالة تأكيد البريد الإلكتروني
      const emailSent = await sendVerificationEmail(formData.email, formData.username);

      if (emailSent) {
        toast({
          title: "تم إرسال رسالة التأكيد",
          description: `تم إرسال رسالة تأكيد إلى ${formData.email}`,
        });

        setTimeout(() => {
          toast({
            title: "تم التسجيل بنجاح",
            description: "تم إنشاء حساب Inferno Mena الخاص بك",
          });
        }, 1500);

        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        toast({
          title: "تنبيه",
          description: "تم التسجيل بنجاح ولكن فشل إرسال رسالة التأكيد",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء التسجيل. الرجاء المحاولة مرة أخرى",
        variant: "destructive"
      });
    }
  };

  // Rest of the component remains the same...
};

export default RegisterPage;
