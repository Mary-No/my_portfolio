import React, {useEffect, useRef} from 'react';
import './Button.scss';
function Button() {

    const ref = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
        const click = function() {
            ref.current?.classList.remove('animate');
            ref.current?.classList.add('animate');
            setTimeout(function(){
                ref.current?.classList.remove('animate');
            },700);
        };

        ref.current?.addEventListener('click', click)

        return () => {
            ref.current?.removeEventListener('click', click)
        }
    },[])

    return (
          <button className={`header-btn`} ref={ref}>Связаться</button>

    );
}

export default Button;
