<html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(s){         
                let answer=0;
                for(let x of s){
                    //let num=x.charCodeAt();
                    //if(num>=65 && num<=90) answer++;
                    if(x===x.toUpperCase()) answer++; 
                }

                return answer;
            }

            let str="KoreaTimeGood";
            console.log(solution(str));
        </script>
    </body>
</html>