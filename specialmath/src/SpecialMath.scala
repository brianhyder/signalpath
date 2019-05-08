import scala.collection.mutable.{HashMap, Map}

/**
 * Provides an entry point to a program that will calculate a modified fibonacci sequence called 
 * "SpecialMath".  It expects to have a single command line argument that can be parsed as a Long 
 * value.
 * The premise of the algorithm is to leverage recursion in order to find the number in the 
 * sequence.  While recursion alone will solve the problem its time and space complexity is very 
 * high.  The algorithm below reduces that by providing a caching mechanism.  The caching mechanism 
 * (HashMap) is effective because it drastically reduces the number of times that the 
 * "modifiedFib" function is called with the same "n" value.
 */
object SpecialMath {

  /**
   * Entry point for the program.  It is responsible for parsing the command line argument and 
   * handing it off to the "modifiedFib" function to do the heavy lifting before finally printing 
   * the result
   */
  def main(args: Array[String]): Unit = {
    if (args.size != 1) {
      System.err.println("No test input was provided!")
      System.exit(1)
    }

    val indexStr = args(0);
    val result = modifiedFib(indexStr.toLong);
    println(result)
  }

  /**
   * Responsible for storing the cached values where the key is the index of the sequence and the 
   * key is the previously computed value of the sequence at the given index
   */
  private val cache: Map[Long, Long] = new HashMap[Long, Long]()

  /**
   * Responsible for finding the value of the sequence at the provided index, "n".
   */
  private def modifiedFib(n: Long): Long = {
    if (n == 0L) {
      return 0L
    }
    if (n == 1L) {
      return 1L
    }
    
    if (cache.contains(n)) {
      return cache(n);
    }
    val sum =  n + modifiedFib(n - 1) + modifiedFib(n - 2);
    cache(n) = sum
    return sum;
  }
}
