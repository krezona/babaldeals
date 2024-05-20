import React from "react";
import "./Helpcenter.css";

const Helpcenter = () => {
  return (
    <div className="container">
      <div className="helpcenterContainer inter">
        <div className="helpcenterContainerFirst">
          <p className="helpcenterTitle">
            Can I reactivate my inactive E-Commerce account?
          </p>

          <p className="helpcenterDescription">
            Yes. To reactivate your Babaldeals account, simply log in with your
            registered email ID or mobile number password combination used
            before deactivation. Your account data will be fully restored,
            default subscription settings applied.
          </p>
        </div>

        <div className="helpcenterContainerSecond">
          <p className="helpcenterTitle">
            Why do I need to verify my mobile number or email address to log
            into my E-Commerce account?
          </p>

          <p className="helpcenterDescription">
            To make sure that your account details are always secure,
            verification by OTP (One Time Password) is important. This is a
            one-time process and you can log into your Babaldeals account
            without any hassles once this is done.
          </p>
        </div>
        <div className="helpcenterContainerThird">
          <p className="helpcenterTitle">
            What is an OTP or verification code?
          </p>

          <p className="helpcenterDescription">
            An OTP (One Time Password) or verification code is a password/code
            used to verify your mobile number or email ID when you log into your
            Babaldeals account for the first time. OTP verification will be also
            be done in other cases like creating an account, password recovery,
            and updating email/mobile details.
          </p>
        </div>
        <div className="helpcenterContainerFourth">
          <p className="helpcenterTitle">
            Do I need to verify my mobile number or email address every time I
            log in?
          </p>

          <p className="helpcenterDescription">
            As the verification step is a one time process, you won't have to do
            it again once your account is verified.
          </p>
        </div>
        <div className="helpcenterContainerFifth">
          <p className="helpcenterTitle">
            Can I use an international number to sign up?
          </p>

          <p className="helpcenterDescription">
            No, you can’t use International number to sign up. But you can use
            digital wallet to pay.
          </p>
        </div>
        <div className="helpcenterContainerSixth">
          <p className="helpcenterTitle">
            What should I do if I don't get the OTP or verification code while
            logging in to my Babaldeals account?
          </p>

          <p className="helpcenterDescription">
            Network issues sometimes delay OTP-based SMS. You can regenerate the
            code by clicking 'Resend Code'. In case that doesn't work, you can
            try switching your phone off and back on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Helpcenter;
