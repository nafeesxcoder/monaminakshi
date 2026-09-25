import Footer from "@/components/shared/footer";
import Navbar from "./navbar";
import ChatAssistant from "./ChatAssistant";
import Preloader from "./PreLoader";
import MobileActions from "./MobileActions";
export default function ClientLayout({ children }) { return <><Preloader/><Navbar /><main id="main-content">{children}</main><Footer /><MobileActions/><ChatAssistant /></>; }
