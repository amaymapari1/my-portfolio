import { loader, loaderWrap, srOnly } from "../../styles/global.css";

export default function Loader({ label }: { label: string }) {
  return (
    <div className={loaderWrap} role="status">
      <div className={loader} />
      <span className={srOnly}>{label}</span>
    </div>
  );
}
