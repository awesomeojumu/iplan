import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"} className="text-3xl">
                <b><span className="text-blue-900">iP</span>lan.</b>
            </Link>
            <h4 className="max-w-xs mt-4 text-l font-semibold">
                Exellence or Nothing
            </h4>
            {/* <div className="flex mt-8 space-x-6">
              <Link
                href="https://www.facebook.com/profile.php?id=100017192357822&sk"
                target="_blank"
              >
                <FacebookOutlinedIcon className="hover:text-purple-900 hover:-translate-y-1 transition-all cursor-pointer text-xl" />
              </Link>
              <Link href="https://github.com/NaseemKhan005" target="_blank">
                <GitHubIcon className="hover:text-purple-900 hover:-translate-y-1 transition-all cursor-pointer text-xl" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/naseem-khan-275275258/"
                target="_blank"
              >
                <LinkedInIcon className="hover:text-purple-900 hover:-translate-y-1 transition-all cursor-pointer text-xl" />
              </Link>
              <Link href="https://twitter.com/NaseemK69128903" target="_blank">
                <TwitterIcon className="hover:text-purple-900 hover:-translate-y-1 transition-all cursor-pointer text-xl" />
              </Link>
              <Link
                href="https://www.instagram.com/naseem_khan005/"
                target="_blank"
              >
                <InstagramIcon className="hover:text-purple-900 hover:-translate-y-1 transition-all cursor-pointer text-xl" />
              </Link>
            </div> */}
          </div>

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link
                  href="/#"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Company Review
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
              <Link
                  href="/resume"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  iPlan Resume
                </Link>

                <Link
                  href="/business"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  iPlan Business
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/ats"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  ATS-Friendly Resume
                </Link>
                {/* <Link
                  href="/policy"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Privacy Policy
                </Link> */}
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/privacy"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">© 2024 iPlan Solutions - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
