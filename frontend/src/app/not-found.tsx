import nfs from "@/styles/NotFound.module.scss";

export default function NotFound() {
    return (
        <div className={nfs.nf_container}>
            <h2 className={nfs.nf_title}>404 - Page Not Found</h2>
            <p className={nfs.nf_message}> The Page You Are Looking For Does Not Exist</p>
        </div>
    );
}