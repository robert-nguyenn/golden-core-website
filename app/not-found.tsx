import Link from "next/link";
export default function NotFound() { return <main className="not-found wrap"><p className="eyebrow"><span /> 404</p><h1>Trang này không<br /><span className="headline-accent">còn ở đây.</span></h1><p>Có thể đường dẫn đã thay đổi. Hãy quay về điểm bắt đầu.</p><Link className="button gold" href="/">Về trang chủ</Link></main>; }
