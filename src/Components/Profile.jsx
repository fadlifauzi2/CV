import { Card } from "flowbite-react"
import pp from "../assets/pp.jpg"

const Profile = () => {
    return (
        <Card className="max-w-full m-5">
            <div className="flex justify-between px-4 pt-4 flex-wrap">
                <div className="flex flex-col items-center pb-10">
                    <img
                        alt="Profile Image"
                        height="96"
                        src={pp}
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Rasya Bayu Pratama</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Student</span>
                </div>
                <div className="coloumn py-4 sm:text-center md:text-left">
                    <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Phone +62 817-7044-8619</h4>
                    <h5>Email: rasyabayu857@gmail.com</h5>
                    <h5>Github: https://github.com/bayuu15</h5>
                    <h5>Instagram: instagram.com/shmoocc</h5>
                </div>
            </div>
        </Card>
    )
}

export default Profile