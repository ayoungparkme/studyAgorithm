<html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(s){  
                let answer;
                let stack=[];
                for(let x of s){
                    if(x===')'){
                        while(stack.pop()!=='(');
                    }
                    else stack.push(x);
                }
                answer=stack.join('');
                return answer;
            }

            let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
            console.log(solution(str));
        </script>
    </body>
</html>