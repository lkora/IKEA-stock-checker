from bin.get_data import get_data

'''
## TODO:
#   Implement E-mail notification
#   Create shell script that will call this periodically
#   Figure out ART meaning 
'''


def main():
    item_list = open("./item_list.txt", "r")
    get_data(item_list)
    item_list.close()
    
    

if __name__ == "__main__":
    main()