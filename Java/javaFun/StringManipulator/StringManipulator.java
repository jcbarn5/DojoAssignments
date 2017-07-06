public class StringManipulator {
  // trimAndConcat(String, String): Trim both input strings and then concatenate them. Return the new string.
  public String trimAndConcat(String a, String b){
    return a.trim() + b.trim();
  }
  // getIndexOrNull(String, char): Get the index of the character and return either the index or null.
  public String getIndexOrNull(String str1, char char1){
    for (int i = 0; i < str1.length(); i++){
      if (str1.charAt(i) == char1){
        int ind = i;
        String indexString = String.valueOf(ind);
        return indexString;
      }
    }
    return null;
  }
  // getIndexOrNull(String, String): Get the index of the start of the substring and return either the index or null.
  public int getIndexOrNullSt(String str1, String substr){
    int pos = str1.toLowerCase().indexOf(substr.toLowerCase());
    // String ans = String.valueOf(pos);
    return pos;
  }
  // concatSubstring(String, int, int, String): Get a substring using a starting and ending index, and concat that with the second string input to our method; e.g. an input of ("Hello",1,2,"world") would get the substring of "e" and then concatenate it with "world" to return eworld.
  public String concatSubstring(String str1, int s, int f, String str2){
    String answer = "";
    String temp = str1.substring(s, f);
    answer = temp.concat(str2);
    return answer;
  }

}
