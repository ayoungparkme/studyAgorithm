<html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(n){
                function DFS(L){
                    if(L==0) return;
                    else{
                        DFS(L-1);
                        console.log(L);   
                    }
                }
                DFS(n);
            }

            solution(3);
        </script>
    </body>
</html>