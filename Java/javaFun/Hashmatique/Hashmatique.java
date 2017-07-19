import java.util.HashMap;

class Hashmatique
{
  public static void main(String[] args)
  {
    HashMap<String, String> songs = new HashMap<>();
    songs.put("Song1", "Hello, it's me, I'm in CA");
    songs.put("Song2", "Bullet in the head");
    songs.put("Song3", "I have seen the others");
    songs.put("Song4", "And it's a hard one");

    String track = songs.get("Song1");
    System.out.println(track);

    for(String key : songs.keySet()) {
      System.out.println(key + " : " + songs.get(key));
    }
  }
}
