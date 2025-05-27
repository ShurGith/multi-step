
function DesktopLeftSide() {
    return (
        <div className="col-span-3 rounded-lg"
            style={{ backgroundImage: 'url("/images/bg-sidebar-desktop.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex w-full h-full flex-col mt-4 ml-8 items-center gap-2 min-h-[500px]">
                <div className="flex w-full items-center">
                    <div className="flex size-6 items-center justify-center text-Gray2 px-6 py-6 border border-Gray2 rounded-full">
                        <p className="text-xl font-bold text-white">1</p>
                    </div>
                    <div className="flex flex-col justify-center text-Gray2 px-6 py-6">
                        <p className="text-xs text-BlueTwo">STEP 1</p>
                        <p className="text-sm font-bold">YOUR INFO</p>
                    </div>
                </div>
                <div className="flex w-full items-center">
                    <div className="flex size-6 items-center justify-center text-Gray2 px-6 py-6 border border-Gray2 rounded-full">
                        <p className="text-xl font-bold text-white">2</p>
                    </div>
                    <div className="flex flex-col justify-center text-Gray2 px-6 py-6">
                        <p className="text-xs text-BlueTwo">STEP 2</p>
                        <p className="text-sm font-bold">SELECT PLAN</p>
                    </div>
                </div>
                <div className="flex w-full items-center">
                    <div className="flex size-6 items-center justify-center text-Gray2 px-6 py-6 border border-Gray2 rounded-full">
                        <p className="text-xl font-bold text-white">3</p>
                    </div>
                    <div className="flex flex-col justify-center text-Gray2 px-6 py-6">
                        <p className="text-xs text-BlueTwo">STEP 3</p>
                        <p className="text-sm font-bold">ADD-ONS</p>
                    </div>
                </div>
                <div className="flex w-full items-center">
                    <div className="flex size-6 items-center justify-center text-Gray2 px-6 py-6 border border-Gray2 rounded-full">
                        <p className="text-xl font-bold text-white">4</p>
                    </div>
                    <div className="flex flex-col justify-center text-Gray2 px-6 py-6">
                        <p className="text-xs text-BlueTwo">STEP 4</p>
                        <p className="text-sm font-bold">SUMMARY</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopLeftSide