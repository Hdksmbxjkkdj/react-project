export const ProfileDetails = ({title,className,children})=> {
    return <>
        <div className={`table__box ${className}`}>
            {children}
        </div>
    </>
}