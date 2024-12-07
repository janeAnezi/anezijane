const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        {/* <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div> */}
  
        <div className="flex gap-3">
          <div className="social-icon">
            <a href="https://github.com/janeAnezi" target="_blank" rel="noopener noreferrer" className="pl-4"><img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" /></a>
          </div>
          <div className="social-icon">
            <a href="http://" target="_blank" rel="noopener noreferrer" className="pl-4"><img src="/assets/twittersvg.jpeg" alt="twitter" className="w-1/2 h-1/2 rounded-lg" /></a>
          </div>
          <div className="social-icon">
            <a href="http://" target="_blank" rel="noopener noreferrer" className="pl-4"><img src="/assets/linkdinsvg.png" alt="instagram" className="w-1/2 h-1/2 rounded-lg" /></a>
          </div>
        </div>
  
        <p className="text-slate-400">© 2024 Anezi Jane. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;