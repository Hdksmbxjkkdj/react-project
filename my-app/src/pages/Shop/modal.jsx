export function modal({children,closebtn}){
    return<>
    <div>
        {children}
        <button onClick={closebtn}>cllose</button>
    </div>
    </>
}