

export const addtoSummary = (data,dataType='single') => {
    return dispatch => {
        try {
            if(dataType !=='single'){
                dispatch({type:'ADD_TO_SUMMARY',payload:data})

            } else {
                dispatch({type:'ADD_TO_SUMMARY',payload:[data]})
            }
            
        } catch (error) {
            console.log(error)
            
        }

    }
}