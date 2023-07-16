Questions: 

React pass through props

-> React pass through refs


2. 
whats the diff between

```
    const progressAnimation = useCallback(() => {
        setAnimationState(animationState + 1)
    }, [animationState]);

    // const progressAnimation = useCallback(() => {
    //     setAnimationState((state) => state + 1)
    // }, []);
    
 ```

 ```
    const progressAnimationTwice = useCallback(() => {
        progressAnimation();
        progressAnimation();
    }, [progressAnimation]);

    ```