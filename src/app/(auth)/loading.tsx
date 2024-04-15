
function LoadingAuthPage(){

    return (<section className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6">
                <div className="grid gap-6 items-center">
                    <div className="flex flex-col justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text bg-gradient-to-r">
                        Sua página está carregando
                        </h1>
                        <p className="max-w-[600px] md:text-xl dark:text-zinc-100 mx-auto py-4">
                        Aguarde um momento
                        </p>
                    </div> 
                    </div>
                </div>
                </div>
            </section>  
      )
}
export default LoadingAuthPage