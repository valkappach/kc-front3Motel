/*
* private Long id:n
    private String bed;
    private String title;
    private String description;
    private String roomNumber;
    private double currentPrice;
    private boolean promotion;
    private boolean selected;
    private boolean available;
    private String photoName;
    //@Column(nullable = false, updatable = false)
    //    private String employeeCode;
    // private String photoRoomUrl;
    //private LocalDate releaseDate;
    //
    //	private LocalDate registerDate;

    // private totalExamplaries:int;
    @ManyToOne
    private Roomtype roomtype;
    @Transient
    private int quantity = 1;

*
* */
