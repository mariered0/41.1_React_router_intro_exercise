import React, { useState } from 'react';

const useIncrement = (INITIAL_NUM) => {
    const [num, incrementNum] = useState(INITIAL_NUM);
    const increment = () => {
        incrementNum(num => num += 1);
}
return [num, increment];
}

export default useIncrement;

