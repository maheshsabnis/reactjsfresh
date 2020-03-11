import React, { Suspense } from 'react';
const StudentComponent = React.lazy(()=> import('./../../classcomponents/studentcomponent/studentcomponent'))
function DynamicLoadingComponent (){
    return (
       
        <div className="container">
             <Suspense fallback={<div>.....Loading Wait </div>}>
                    <StudentComponent></StudentComponent>
             </Suspense>             
        </div>
    );
}

export default DynamicLoadingComponent;
