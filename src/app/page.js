import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main id="content" role="main" className="grid place-items-center h-[95vh]  p-4 m-4 box-border bg-gray-200 dark:bg-gray-900 rounded-xl ">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className=" text-2xl font-bold md:text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-yellow-400 inline-block text-transparent bg-clip-text">
            Forsure Real Estate Ltd.
            </h1>
          <h3 className="block text-2xl font-bold  ">Coming Soon</h3>
          <div className="max-w-5xl">
            <p className="mt-3 text-lg">We're working hard behind the scenes to bring you a great online experience, so keep an eye out for what's coming soon. We understand that the world is constantly evolving, and as a result, our website is designed to keep up with the times. Our aim is to provide you with a platform that is user-friendly, visually appealing, and offers a plethora of features that cater to your Real Estate needs. Thank you for choosing us as your Real Estate partner, and we can't wait to show you what we have.

            </p>
          </div>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">


      <div id="mc_embed_signup">
        <form action="https://forsure-realty.us13.list-manage.com/subscribe/post?u=57fd55baa1747680caa51a85a&amp;id=ba5512960e&amp;f_id=0063e3e2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <div className="grid sm:flex gap-3">
              <input type="email"  name="EMAIL" id="mce-EMAIL" className="block w-full border-gray-200 sm:text-sm shadow-sm rounded-md p-3 dark:bg-[#151c2f] dark:border-gray-800 dark:text-gray-400" placeholder="Email address" />
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="inline-block text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-100 transition py-2.5 px-6 dark:focus:ring-offset-[#151c2f]" />
            </div>
            <div id="mce-responses" className="mt-3 text-gray-500 dark:text-gray-400">
              <div className="response" id="mce-error-response" style={{ display: "none" }} />
              <div className="response" id="mce-success-response" style={{ display: "none" }} />
            </div>
            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
              <input type="text" name="b_57fd55baa1747680caa51a85a_ba5512960e" tabIndex={-1} value={true} />
            </div>
          </div>
        </form>
      </div>
      <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" />
      <script dangerouslySetInnerHTML={{ __html: `
        (function($) {
          window.fnames = new Array();
          window.ftypes = new Array();
          fnames[0] = 'EMAIL';
          ftypes[0] = 'email';
          fnames[1] = 'FNAME';
          ftypes[1] = 'text';
          fnames[2] = 'LNAME';
          ftypes[2] = 'text';
          fnames[3] = 'ADDRESS';
          ftypes[3] = 'address';
          fnames[4] = 'PHONE';
          ftypes[4] = 'phone';
          fnames[5] = 'BIRTHDAY';
          ftypes[5] = 'birthday';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);
      `}} />



          </div>
        </div>
      </main>


    </>

  )
}
