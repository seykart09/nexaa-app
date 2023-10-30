import React , {useState} from 'react';

interface ProgressBarProp {
    currentIndex: number;
    index: number;
    progress: string;
}

const Progress = ({currentIndex, index ,progress} : ProgressBarProp) => {

  const isProgressShowing = currentIndex === index;

  // let state = `${progress}%`;
  // console.log("progress index",index)
  return (
    <div>
        <div className="h-0.5 w-full bg-neutral-200 dark:bg-blue-100">
          {
          isProgressShowing 
          && 
          <div className="h-0.5 bg-blue-700" style={{ width: progress }}></div>
          }
        </div>
    </div>
  )
}

export default Progress