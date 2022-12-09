const Footer = () => {
	return (
		<nav className="flex text-[#F9F9F9] bg-[#D63636] bg-blend-overlay bg-footer-bg h-80 rounded-t-[4rem] justify-center items-center">
			<div className="flex basis-1/3 space-x-5 justify-center items-center">
				<p className="text-xl font-semibold cursor-pointer">CONTACT US</p>
				<svg width="13" height="30" viewBox="0 0 13 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<line x1="1.4115" y1="29.0199" x2="11.6721" y2="0.829129" stroke="#E4E4E4"/>
				</svg>
				<p className="text-xl font-semibold cursor-pointer">ABOUT</p>
				<svg width="13" height="30" viewBox="0 0 13 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<line x1="1.4115" y1="29.0199" x2="11.6721" y2="0.829129" stroke="#E4E4E4"/>
				</svg>
				<p className="text-xl font-semibold cursor-pointer">TERMS</p>
			</div>
			<div className="flex basis-1/3 justify-center items-center">
				<div className="flex flex-col">
					<h2 className="text-4xl font-semibold mb-2">DELICIOUS FRUIT</h2>
					<p className="text-center font-regular text-base">© 2022 IWC LABS</p>
				</div>
			</div>
			<div className="flex basis-1/3 space-x-5 justify-center items-center">
				<svg className="cursor-pointer" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M10.5 0C4.97715 0 0.5 4.47715 0.5 10V30C0.5 35.5228 4.97715 40 10.5 40H30.5C36.0228 40 40.5 35.5228 40.5 30V10C40.5 4.47715 36.0228 0 30.5 0H10.5ZM30.7286 13.3377L33.3 12.916L30.7286 15.0247C32.0143 21.7725 23.4429 34.4247 9.3 27.6769C14.0143 27.6769 16.5857 25.5682 16.5857 25.5682C16.5857 25.5682 13.5857 25.5682 11.8714 22.1943H14.8714C11.8714 21.3508 10.1571 19.6638 10.1571 17.1334L12.7286 17.9769C8.44286 15.0247 11.0143 11.2291 11.0143 11.2291C11.0143 11.2291 14.4429 16.2899 21.3 16.2899C19.5857 12.4943 25.5857 7.85514 29.4429 12.0725L32.4429 11.2291L30.7286 13.3377Z" fill="#F9F9F9"/>
				</svg>
				<svg className="cursor-pointer" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M10.5 0C4.97715 0 0.5 4.47715 0.5 10V30C0.5 35.5228 4.97715 40 10.5 40H30.5C36.0228 40 40.5 35.5228 40.5 30V10C40.5 4.47715 36.0228 0 30.5 0H10.5ZM24.4464 10.4031C26.2185 10.7125 27.9132 11.2564 29.4941 11.9924C29.5079 11.998 29.5193 12.0086 29.5262 12.0222C32.3274 16.2054 33.71 20.9262 33.1933 26.3594C33.1921 26.3709 33.1885 26.382 33.1828 26.3919C33.1771 26.4019 33.1694 26.4104 33.1603 26.417C31.2813 27.83 29.1845 28.905 26.9584 29.5966C26.9427 29.6014 26.926 29.6011 26.9104 29.5958C26.8949 29.5904 26.8813 29.5803 26.8716 29.5667C26.4035 28.9043 25.9778 28.2068 25.6058 27.474C25.6007 27.4639 25.5978 27.4528 25.5972 27.4415C25.5966 27.4301 25.5984 27.4187 25.6024 27.4081C25.6064 27.3975 25.6126 27.3879 25.6205 27.38C25.6284 27.372 25.6378 27.3659 25.6482 27.362C26.3229 27.1039 26.9656 26.7935 27.5835 26.4266C27.5946 26.4199 27.6038 26.4104 27.6104 26.3991C27.617 26.3877 27.6208 26.3749 27.6214 26.3617C27.622 26.3485 27.6194 26.3353 27.6139 26.3234C27.6084 26.3114 27.6001 26.3011 27.5897 26.2933C27.4585 26.1941 27.3293 26.0906 27.2054 25.9861C27.194 25.9768 27.1803 25.9709 27.1659 25.9692C27.1514 25.9675 27.1368 25.9701 27.1237 25.9765C23.1135 27.858 18.7188 27.858 14.6611 25.9765C14.648 25.9704 14.6335 25.9682 14.6193 25.9701C14.6051 25.972 14.5916 25.9779 14.5805 25.9872C14.4565 26.0907 14.3263 26.1941 14.1961 26.2933C14.1858 26.3013 14.1777 26.3118 14.1723 26.3238C14.167 26.3358 14.1646 26.349 14.1654 26.3623C14.1662 26.3755 14.1702 26.3883 14.177 26.3995C14.1838 26.4107 14.1932 26.4201 14.2043 26.4266C14.8244 26.7905 15.4712 27.1036 16.1387 27.3631C16.1821 27.3802 16.2027 27.4314 16.181 27.474C15.8173 28.2078 15.3916 28.9065 14.9142 29.5678C14.9041 29.5808 14.8904 29.5905 14.875 29.5954C14.8595 29.6004 14.8429 29.6004 14.8274 29.5955C12.6051 28.902 10.5117 27.8275 8.63483 26.417C8.62591 26.41 8.61847 26.4012 8.61297 26.3911C8.60746 26.381 8.604 26.3699 8.60279 26.3584C8.16984 21.6589 9.05125 16.8998 12.2669 12.0201C12.2748 12.0072 12.2863 11.9972 12.3 11.9913C13.8819 11.2543 15.5766 10.7103 17.3476 10.401C17.3636 10.3984 17.38 10.4009 17.3946 10.4081C17.4092 10.4154 17.4213 10.427 17.4293 10.4415C17.6652 10.8663 17.8781 11.3043 18.0668 11.7535C19.9463 11.4636 21.8571 11.4636 23.7366 11.7535C23.906 11.3482 24.1478 10.8351 24.3648 10.4415C24.3729 10.4272 24.3851 10.4158 24.3997 10.4089C24.4143 10.402 24.4307 10.4 24.4464 10.4031ZM14.5588 20.9582C14.5588 22.3565 15.5662 23.4967 16.7876 23.4967C18.0286 23.4967 19.0164 22.3576 19.0164 20.9582C19.0361 19.5684 18.0379 18.4197 16.7876 18.4197C15.5466 18.4197 14.5588 19.5588 14.5588 20.9582ZM22.7993 20.9582C22.7993 22.3565 23.8058 23.4967 25.0282 23.4967C26.2795 23.4967 27.257 22.3576 27.257 20.9582C27.2767 19.5684 26.2785 18.4197 25.0282 18.4197C23.7862 18.4197 22.7993 19.5588 22.7993 20.9582Z" fill="#F9F9F9"/>
				</svg>
				<svg className="cursor-pointer" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M10.5 0C4.97715 0 0.5 4.47715 0.5 10V30C0.5 35.5228 4.97715 40 10.5 40H30.5C36.0228 40 40.5 35.5228 40.5 30V10C40.5 4.47715 36.0228 0 30.5 0H10.5ZM10.9 13.97L12.3626 10.4H31.7V23.1277L26.0131 28.5612H21.7869L19.0243 31.2H16.1V28.5612H10.9V13.97ZM26.4991 25.3013L29.7495 22.1974V12.2625H14.1505V25.3023H18.5374V27.9401L21.3 25.3013H26.4991ZM26.4991 21.2604V15.8335H24.5495V21.2604H26.4991ZM21.3 21.2604V15.8335H19.3505V21.2604H21.3Z" fill="#F9F9F9"/>
				</svg>
			</div>
		</nav>
	)
}

export default Footer;