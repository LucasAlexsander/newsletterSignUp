import React from 'react';
import Info from '../Componets/Info';
import banner from '../assets/images/illustration-sign-up-desktop.svg';
import iconSend from '../assets/images/icon-success.svg';
import Button from '../Componets/Button';

const Index = () => {
  const [send, setSend] = React.useState(false);

  if (send == true) {
    return (
      <>
        <div className="send">
          <img src={iconSend} alt="" />
          <h1>Thanks for subscribing!</h1>
          <p>
            {' '}
            A confirmation email has been sent to{' '}
            <strong>ash@loremcompany.com</strong>. Please open it and click the
            button inside to confirm your subscription.
          </p>
          <Button setValue={setSend} name="Dismiss message" />
        </div>
      </>
    );
  }

  return (
    <>
      <main>
        <Info send={setSend} />
        <div className="banner"></div>
      </main>
    </>
  );
};

export default Index;
