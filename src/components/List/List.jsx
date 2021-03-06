import React from "react";
import Item from "../Item/Item";

export default function List({ listTask, changeStatus, deleteTask, emptyBox, onChangeForm }) {
    
  return (
    <>
        { emptyBox ? (
            <div className='box flex flex-col justify-center w-full items-center mt-12'>
                <div className='empty-box'> 
                <svg width="197" height="199" viewBox="0 0 197 199" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M99.5 199V105L24.5 64L24 158.5L99.5 199Z" fill="url(#paint0_linear_2_12)"/>
                    <path d="M99 199V105L174 64L174.5 158.5L99 199Z" fill="url(#paint1_linear_2_12)"/>
                    <path d="M2.83276 84.0373L22.3858 64.5811C23.3281 63.6435 24.7751 63.4378 25.9414 64.0757L97.6294 103.285C99.3416 104.222 99.718 106.518 98.3944 107.952L79.6417 128.271C78.7045 129.286 77.195 129.53 75.9857 128.861L3.4974 88.7894C1.74804 87.8224 1.41584 85.4472 2.83276 84.0373Z" fill="url(#paint2_linear_2_12)"/>
                    <path d="M98.8328 107.963L118.386 127.419C119.328 128.357 120.775 128.562 121.941 127.924L193.629 88.7147C195.342 87.7783 195.718 85.4822 194.394 84.048L175.642 63.7295C174.705 62.7141 173.195 62.4701 171.986 63.1386L99.4974 103.211C97.748 104.178 97.4158 106.553 98.8328 107.963Z" fill="url(#paint3_linear_2_12)"/>
                    <path d="M98.7132 21.7878L118.364 1.65026C119.314 0.677192 120.799 0.464367 121.984 1.13163L193.745 41.5527C195.416 42.4941 195.787 44.7404 194.506 46.1688L175.661 67.1977C174.718 68.2495 173.17 68.5014 171.942 67.8026L99.376 26.4902C97.6684 25.518 97.3409 23.1941 98.7132 21.7878Z" fill="url(#paint4_linear_2_12)"/>
                    <path d="M98.1046 20.6619L78.6031 1.54662C77.6647 0.626808 76.2369 0.424726 75.0802 1.04799L3.43069 39.6516C1.69757 40.5854 1.3184 42.9072 2.66441 44.3438L21.3682 64.3069C22.3024 65.3039 23.7923 65.5438 24.9922 64.8904L97.4393 25.439C99.21 24.4748 99.5444 22.0732 98.1046 20.6619Z" fill="url(#paint5_linear_2_12)"/>
                    <path d="M173.5 64L100 24L25 64L99.5 105L173.5 64Z" fill="url(#paint6_linear_2_12)"/>
                    <defs>
                    <linearGradient id="paint0_linear_2_12" x1="61.75" y1="64" x2="61.75" y2="199" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F2C397"/>
                    <stop offset="1" stopColor="#F2C397"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2_12" x1="136.75" y1="64" x2="136.75" y2="199" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E2AE83"/>
                    <stop offset="1" stopColor="#E2AE83"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_2_12" x1="68.3535" y1="77.7197" x2="38.9615" y2="118.971" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFD2A6"/>
                    <stop offset="1" stopColor="#FFD2A6"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_2_12" x1="164.354" y1="114.28" x2="134.961" y2="73.0286" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFD2A6"/>
                    <stop offset="1" stopColor="#FFD2A6"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_2_12" x1="164.354" y1="15.1591" x2="133.804" y2="56.7928" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFD2A6"/>
                    <stop offset="1" stopColor="#FFD2A6"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_2_12" x1="32.6465" y1="14.5" x2="61.4551" y2="55.5455" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFD2A6"/>
                    <stop offset="1" stopColor="#FFD2A6"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear_2_12" x1="99.25" y1="24" x2="99.25" y2="105" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C48D69"/>
                    <stop offset="1" stopColor="#C48D69"/>
                    </linearGradient>
                    </defs>
                </svg>
                </div>
                <h2 className='text-gray-400 text-3xl mt-6 font-light'>???????????? ?????? ????????</h2>
            </div> 
            ) : 
            ( <ul className="max-w-lg w-full overflow-y-auto max-h-96">
                
                {listTask.map( (task) => 
                    <Item 
                    key={task.idTask} 
                    id={task.idTask} 
                    task={task}
                    taskText={task.textTask}
                    changeStatus={changeStatus}
                    deleteTask={deleteTask}
                    onChangeForm={onChangeForm}
                    />)
                }
            </ul> )
        }
    </>
  );
}
