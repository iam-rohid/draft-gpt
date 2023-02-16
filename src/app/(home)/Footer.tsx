import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-screen-xl px-4 grid grid-cols-12 gap-8 py-16">
        <div className="col-span-12 md:col-span-6">
          <Link href="/" className="inline-flex items-center mb-8">
            <Image
              width={48}
              height={48}
              className="object-contain h-12 w-12"
              src="/logo-512.png"
              alt="DraftGPT transparent 512x512 logo"
            />
            <span className="text-2xl font-bold text-gray-900">DraftGPT</span>
          </Link>
          <p className="text-slate-600">
            DraftGPT is an online AI-powered content generation tool that
            enables content creators and writers to effortlessly generate
            high-quality content in a matter of seconds. With DraftGPT, users
            can generate blog posts, articles, product descriptions, social
            media captions, and much more. The tool utilizes the power of
            OpenAI&apos;s GPT language model to generate content that is
            grammatically correct, engaging, and informative. Whether
            you&apos;re a blogger, marketer, or copywriter, DraftGPT can help
            you save time and increase your productivity by automating the
            content creation process. Best of all, it&apos;s completely free to
            use!
          </p>
        </div>

        <div className="col-span-6 md:col-span-3">
          <p className="font-medium text-lg mb-4">Navigate</p>
          <nav>
            <Link
              className="block mb-2 text-slate-600 hover:text-slate-900"
              href="/"
            >
              Home
            </Link>
            <Link
              className="block mb-2 text-slate-600 hover:text-slate-900"
              href="/templates"
            >
              Templates
            </Link>
            <Link
              className="block mb-2 text-slate-600 hover:text-slate-900"
              href="/chat"
            >
              Chat
            </Link>
            <Link
              className="block mb-2 text-slate-600 hover:text-slate-900"
              href="/playground"
            >
              Playground
            </Link>
            <Link
              className="block mb-2 text-slate-600 hover:text-slate-900"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="block mb-2 text-slate-600 hover:text-slate-900"
              href="/terms-of-service"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="font-medium text-lg mb-4">Popular Templates</p>
          <nav>
            <Link
              className="block mb-2 text-slate-600 hover:text-slate-900"
              href="/"
            >
              AI Email Writer
            </Link>
            <Link
              className="block mb-2 text-slate-600 hover:text-slate-900"
              href="/templates"
            >
              Paragraph Writer
            </Link>
            <Link
              className="block mb-2 text-slate-600 hover:text-slate-900"
              href="/chat"
            >
              Blog Writer
            </Link>
            <Link
              className="block mb-2 text-slate-600 hover:text-slate-900"
              href="/playground"
            >
              Title Generator
            </Link>
          </nav>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="mx-auto max-w-screen-xl px-4 h-16 flex items-center">
          <p className="text-slate-500">@2023 DraftGPT. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
