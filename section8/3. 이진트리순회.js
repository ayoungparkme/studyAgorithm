<html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(n){
                let answer="";
                function DFS(v){
                    if(v>7) return;
                    else{
                        answer+=(v+' ');
                        DFS(v*2);
                        DFS(v*2+1);
                    }
                }
                DFS(n);
                return answer;
            }

            console.log(solution(1));
        </script>
    </body>
</html>