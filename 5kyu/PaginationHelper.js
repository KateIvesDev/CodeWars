class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and an integer indicating how many
	// items fit within a single page
    this.collection = collection
    this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.collection.length
	}
	pageCount() {
	// returns the number of pages
    return Math.ceil(this.itemCount()/this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
    
    //if the pageIndex is the last page in the array
    if (pageIndex === this.pageCount()-1){
        //if the itemCount can evenly be divided by the itemsPerPage, then the last page will have all of the itemsPerPage
        if (this.itemCount() % this.itemsPerPage === 0){
            return this.itemsPerPage
        } else {
            //if it can't be evenly divided, then the number of items on the current page is the remainder of the itemCount/itemsPerPage
            return this.itemCount() % this.itemsPerPage
      }
    //condition if the given pageIndex is outside of the permissible range
    } else if (pageIndex > this.pageCount()-1 || pageIndex < 0){
        return -1
    //condition for all other pages
    } else {
        return this.itemsPerPage
	}
    }
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range

    //if the given index is outside of the range, return -1
    if (itemIndex > this.itemCount() -1 || itemIndex < 0){
        return -1
    }
    
    return Math.ceil((itemIndex + 1)/this.itemsPerPage) - 1
	}
  
}

const collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

const helper = new PaginationHelper(collection, 10)

console.log(helper.pageCount())// 3)
console.log(helper.itemCount())// 24)
console.log(helper.pageItemCount(2))
console.log(helper.pageIndex(10))
