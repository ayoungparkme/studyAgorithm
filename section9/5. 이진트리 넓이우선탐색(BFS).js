<html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(){  
                let answer="";
                let queue=[];
                queue.push(1);
                while(queue.length){
                    console.log(queue);
                    let v=queue.shift();
                    answer+=v+" ";
                    for(let nv of [v*2, v*2+1]){ 
                        if(nv>7) continue;
                        queue.push(nv);
                    }
                }
                return answer;
            }

            console.log(solution());
        </script>
    </body>
</html>



