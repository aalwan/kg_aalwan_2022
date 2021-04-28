<!DOCTYPE html>
<html>
<title>Web Page Design</title>
<head>
<script>
  function solution(var arr)
  {
    var output = '';
    for(int i=0;i<length(arr);i++)
    {
      var str = '';
      for(int x = arr[i]; x > 0;)
      {
        int r = x%10;
        if(r == 0)
          str = 'Zero'+str;
        if(r == 1)
          str = 'One'+str;
        if(r == 2)
          str = 'Two'+str;
        if(r == 3)
          str = 'Three'+str;
        if(r == 4)
          str = 'Four'+str;
        if(r == 5)
          str = 'Five'+str;
        if(r == 6)
          str = 'Six'+str;
        if(r == 7)
          str = 'Seven'+str;
        if(r == 8)
          str = 'Eight'+str;
        if(r == 9)
          str = 'Nine'+str;
        x=(x-r)/10;
      }
      if(i!=length(arr)-1)
        str += ', ';
      output += str;
    }
  console.log(output);
  }

var arr = process.argv.slice(2);
for(int i = 0; i < length(arr); i++)
{
  var arr2[i] = parseInt(arr[i]);
}
solution(arr2);

</script>
</head>
<body>
</body>
</html>
