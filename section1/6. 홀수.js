<html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(arr){
                let answer=[];
                let sum=0, min=1000;
                for(let x of arr){
                    if(x%2===1){
                        sum+=x;
                        if(x<min) min=x;
                    }
                }
                answer.push(sum);
                answer.push(min);     
                return answer;
            }
            
            arr=[12, 77, 38, 41, 53, 92, 85];
            console.log(solution(arr));
        </script>
    </body>
</html>