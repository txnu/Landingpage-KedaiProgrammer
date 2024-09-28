const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/kedai.programmer/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.3.975.975 1.239 2.242 1.3 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.3 3.608-.975.975-2.242 1.239-3.608 1.3-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.3-.975-.975-1.239-2.242-1.3-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.3-3.608.975-.975 2.242-1.239 3.608-1.3 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.257 0-3.667.015-4.947.072-1.59.067-3.018.342-4.094 1.418-1.076 1.076-1.351 2.504-1.418 4.094-.057 1.281-.072 1.691-.072 4.947s.015 3.667.072 4.947c.067 1.59.342 3.018 1.418 4.094 1.076 1.076 2.504 1.351 4.094 1.418 1.281.057 1.691.072 4.947.072s3.667-.015 4.947-.072c1.59-.067 3.018-.342 4.094-1.418 1.076-1.076 1.351-2.504 1.418-4.094.057-1.281.072-1.691.072-4.947s-.015-3.667-.072-4.947c-.067-1.59-.342-3.018-1.418-4.094-1.076-1.076-2.504-1.351-4.094-1.418-1.281-.057-1.691-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
            </svg>
          </a>
          <a href="https://github.com/txnu/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 2.024c-5.514 0-10 4.486-10 10 0 4.418 2.867 8.167 6.839 9.488.5.091.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.781.604-3.369-1.344-3.369-1.344-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.07 1.532 1.031 1.532 1.031.892 1.528 2.341 1.087 2.91.831.091-.647.35-1.087.636-1.337-2.22-.252-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.03-2.681-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025a9.564 9.564 0 0 1 2.5-.337c.847.004 1.7.115 2.5.337 1.909-1.294 2.75-1.025 2.75-1.025.544 1.378.201 2.397.099 2.65.64.697 1.029 1.59 1.029 2.681 0 3.843-2.339 4.687-4.566 4.936.359.31.678.923.678 1.859 0 1.343-.012 2.426-.012 2.754 0 .268.18.579.688.481C19.135 20.189 22 16.442 22 12.024c0-5.514-4.486-10-10-10z" />
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.106-.894-2-2-2s-2 .894-2 2v4.5h-3v-9h3v1.324c.872-.874 2.091-1.324 3.37-1.324 2.481 0 4.5 2.019 4.5 4.5v4.5z" />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
