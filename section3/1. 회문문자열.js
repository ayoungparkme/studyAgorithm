<html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(s){
                let answer="YES";
                s=s.toLowerCase();
                let len=s.length;
                for(let i=0; i<Math.floor(len/2); i++){
                    if(s[i]!=s[len-i-1]) return "NO";
                }
                return answer;
            }
            
            let str="goooG";
            console.log(solution(str));
        </script>
    </body>
</html>


<html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(s){
                let answer="YES";
                s=s.toLowerCase();
                if(s.split('').reverse().join('')!=s) return "NO";    
                return answer;
            }
            
            let str="gooG";
            console.log(solution(str));
        </script>
    </body>
</html>



