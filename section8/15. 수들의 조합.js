<html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(n, k, arr, m){         
                let answer=0;
                function DFS(L, s, sum){
                   if(L===k){
                        if(sum%m===0) answer++;
                   }
                   else{
                       for(let i=s; i<n; i++){
                           DFS(L+1, i+1, sum+arr[i]);
                       }
                   }
                }

                DFS(0, 0, 0);
                return answer;
            }

            let arr=[2, 4, 5, 8, 12];
            console.log(solution(5, 3, arr, 6));
        </script>
    </body>
</html>






