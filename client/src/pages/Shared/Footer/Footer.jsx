import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <div>
      <div className="bg-[#0C4E67]">
      <div className="container mx-auto">
        <footer className="footer grid lg:grid-cols-4 grid-flow-dense grid-cols-1 justify-center p-10 text-white">
          <div>
            <span className="mb-2 text-base opacity-100 font-semibold">
              Help
            </span>
            <a className="link link-hover font-light text-base">Shop Online</a>
            <a className="link link-hover font-light text-base">Payment</a>
            <a className="link link-hover font-light text-base">Delivery</a>
            <a className="link link-hover font-light text-base">Returns</a>
            <a className="link link-hover font-light text-base">
              Giest Purchases
            </a>
          </div>
          <div>
            <span className="mb-2 text-base opacity-100 font-semibold">
              We are UrbanUtopia
            </span>
            <a className="link link-hover font-light text-base">
              About UrbanUtopia
            </a>
            <a className="link link-hover font-light text-base">Join Life</a>
            <a className="link link-hover font-light text-base">Work With us</a>
            <a className="link link-hover font-light text-base">Press</a>
          </div>
          <div>
            <span className="mb-2 text-base opacity-100 font-semibold">
              You might be interested in
            </span>
            <a className="link link-hover font-light text-base">Dresses</a>
            <a className="link link-hover font-light text-base">Jackets</a>
            <a className="link link-hover font-light text-base">Jeans</a>
            <a className="link link-hover font-light text-base">Skirts</a>
            <a className="link link-hover font-light text-base">Trousers</a>
          </div>
          <div className="space-y-4 lg:my-12">
            <div>
                <ul className="flex gap-4" >
                    <li className="text-2xl"><Link target="blank" to='https://web.whatsapp.com/'><Icon icon="ic:baseline-whatsapp" /></Link></li>
                    <li className="text-2xl"><Link target="blank" to='https://www.facebook.com/'><Icon icon="ic:baseline-facebook" /></Link></li>
                    <li className="text-2xl"><Link target="blank" to='https://www.instagram.com/'><Icon icon="mdi:instagram" /></Link></li>
                    <li className="text-2xl"><Link target="blank" to='https://twitter.com/'><Icon icon="mdi:twitter" /></Link></li>
                    <li className="text-2xl"><Link target="blank" to='https://www.youtube.com/'><Icon icon="mdi:youtube" /></Link></li>
                </ul>
            </div>
            <h3 className="font-normal text-base items-center">Can we help you?</h3>
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="21"
                viewBox="0 0 37 21"
                fill="none"
              >
                <path
                  d="M33.1154 0L8.07694 0C6.30001 0 4.84616 1.45385 4.84616 3.23077V4.44232C4.84616 4.88655 5.20962 5.25001 5.65386 5.25001C6.09809 5.25001 6.46155 4.88655 6.46155 4.44232V3.23077C6.46155 3.06924 6.50193 2.9077 6.54232 2.74616L15.5885 10.5L6.54232 18.2539C6.50193 18.0923 6.46155 17.9308 6.46155 17.7693V16.5577C6.46155 16.1135 6.09809 15.75 5.65386 15.75C5.20962 15.75 4.84616 16.1135 4.84616 16.5577V17.7693C4.84616 19.5462 6.30001 21 8.07694 21H33.1154C34.8924 21 36.3462 19.5462 36.3462 17.7693V3.23077C36.3462 1.45385 34.8924 0 33.1154 0ZM7.75386 1.65577C7.83463 1.61539 7.95578 1.61539 8.07694 1.61539L33.1154 1.61539C33.2366 1.61539 33.3577 1.61539 33.4385 1.65577L21.1212 12.1962C20.7981 12.4385 20.3943 12.4385 20.0712 12.1962L7.75386 1.65577ZM33.1154 19.3846H8.07694C7.95578 19.3846 7.83463 19.3846 7.75386 19.3443L16.8404 11.55L19.0212 13.4481C19.4654 13.8519 20.0308 14.0539 20.5962 14.0539C21.1616 14.0539 21.727 13.8519 22.1712 13.4481L24.352 11.55L33.4385 19.3443C33.3577 19.3846 33.2366 19.3846 33.1154 19.3846ZM34.7308 17.7693C34.7308 17.9308 34.6904 18.0923 34.6501 18.2539L25.6039 10.5L34.6501 2.74616C34.6904 2.9077 34.7308 3.06924 34.7308 3.23077V17.7693ZM2.42308 8.48078C2.42308 8.03655 2.78654 7.67309 3.23077 7.67309H8.07694C8.52117 7.67309 8.88463 8.03655 8.88463 8.48078C8.88463 8.92502 8.52117 9.28848 8.07694 9.28848H3.23077C2.78654 9.28848 2.42308 8.92502 2.42308 8.48078ZM8.07694 13.3269H0.807694C0.363462 13.3269 0 12.9635 0 12.5193C0 12.075 0.363462 11.7116 0.807694 11.7116H8.07694C8.52117 11.7116 8.88463 12.075 8.88463 12.5193C8.88463 12.9635 8.52117 13.3269 8.07694 13.3269Z"
                  fill="white"
                />
              </svg>
              <h3 className="text-base font-semibold">Send email</h3>
            </div>
          </div>
        </footer>
      </div>
    </div>
    <div className="text-center py-5">
      <p>Copyright ©2023 Web Service. All rights reserved.</p>
    </div>
    </div>
  );
};

export default Footer;
