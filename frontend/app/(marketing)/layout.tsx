const MarketingPage = ({
    children
}:{
    children: React.ReactNode;
})=> {
    return(
        <div className="h-full bg-slate-200">
            {/* navbar */}
            <main className="pt-40 pb-20 bg-slate-200">
                {children}
            </main>
            {/* footer */}
        </div>
    )
}

export default MarketingPage