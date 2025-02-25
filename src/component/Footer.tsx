import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 EXIM FARMER INDIAN CHAMBER OF COMMERCE AND INDUSTRY</p>
          <p>
            <Link href="/privacy">Privacy Policy</Link> | 
            <Link href="/terms">Terms of Use</Link> | 
            <Link href="/sitemap">Sitemap</Link>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;